import Usuario from './Class/Usuario.js'

let output = document.getElementById('output')

document.getElementById('searchBtn').addEventListener('click', async () => {
	const name = document.getElementById('name').value
	const qt = document.getElementById('qt').value

	const response = await fetch(`https://fakerapi.it/api/v1/users?_quantity=${qt}&_gender=male`)
	const dataUsers = await response.json()

	const usuarios = dataUsers.data.map(
		d => new Usuario(d.firstname, d.lastname, d.id, d.uuid, d.username, d.password, d.email, d.ip, d.macAddress, d.website, d.image)
	)

	if (name !== '') {
		console.log(name)
		const usuariosFiltrados = usuarios.filter(userData => userData.firstname === name)
		console.log(usuariosFiltrados)
		if (usuariosFiltrados.length === 0) {
			output.innerHTML = `Sin resultados!`
		} else {
			// Esto tendría que separarlo en una función para no repetir código 👍
			output.innerHTML = usuariosFiltrados.map(
				u =>
					`
        <p>Name: ${u.firstname} ${u.id}</p>
        <p>UUID: ${u.uuid}</p>
        <p>ID: ${u.lastname}</p>
        <p>Username: ${u.username}</p>
        <p>Pass: ${u.password}</p>
        <p>Email: ${u.email}</p>
        <p>IP: ${u.ip}</p>
        <p>MAC: ${u.macAddress}</p>
        <p>Web: ${u.website}</p>
        <image src='${u.image}'>
        `
			)
		}
	} else {
		usuarios.map(u => console.log(`Image: ${u.image}`))
		output.innerHTML = usuariosSinFiltrar.map(
			u =>
				`
      <p>Name: ${u.firstname} ${u.id}</p>
      <p>UUID: ${u.uuid}</p>
      <p>ID: ${u.lastname}</p>
      <p>Username: ${u.username}</p>
      <p>Pass: ${u.password}</p>
      <p>Email: ${u.email}</p>
      <p>IP: ${u.ip}</p>
      <p>MAC: ${u.macAddress}</p>
      <p>Web: ${u.website}</p>
      <image src='${u.image}'>
      `
		)
	}
})
