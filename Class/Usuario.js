import Persona from './Persona.js';

class Usuario extends Persona {
  constructor(id, firstname, lastname, uuid, username, password, email, ip, macAddress, website, image) {
    super(firstname, lastname);
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.uuid = uuid;
    this.username = username;
    this.password = password;
    this.email = email;
    this.ip = ip;
    this.macAddress = macAddress;
    this.website = website;
    this.image = image;
  }
}

export default Usuario;