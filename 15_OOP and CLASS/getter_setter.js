class User {
  constructor(email, password) {
    this._email = email;
    this._password = password; // Use a different name for the property
  }

  get email() {
    return this._email.toUpperCase();
  }
  
  set email(value) {
    this._email;
  }
  
  get password() {
    return `${this._password}hitesh`; // Use the correct property name
  }

  set password(value) {
    this._password = value; // Use the correct property name
  }
}

const abhii = new User("abhi@ai.com", "abc");
console.log(abhii.password); // Output: "123" (converted to uppercase)
console.log(abhii.email); // Output: "123" (converted to uppercase)
