class User {
	static userCount = 0;
  username = "";

  constructor(name){
    User.userCount++;
    this.username = name;
  }
}