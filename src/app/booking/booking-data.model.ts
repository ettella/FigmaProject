export class BookingData {
    
    public imagePath: string;
    public place: string;
    public date: string;
  
    constructor(place: string, date: string, imagePath: string) {
      this.imagePath = imagePath;
      this.place = place;
      this.date = date;
    }
  }