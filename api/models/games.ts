interface games {
  id: number;
  name: string;
  text: string;
  image: string;
}

class Games {
  id = 0;
  name = "";
  text = "";
  image = "";
  constructor(id: number, name: string, text: string, image: string) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.image = image;
  }
}
