import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  listCategory: Array<{ src: string; name: string }> = [
    {
      src: '../../assets/img/Logo.png',
      name: 'img',
    },{
      src: '../../assets/img/Logo.png',
      name: 'img',
    },{
      src: '../../assets/img/Logo.png',
      name: 'img',
    },{
      src: '../../assets/img/Logo.png',
      name: 'img',
    }

  ];
  ngOnInit() {
    try {
      this.listCategory = [
        {
          src: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/307883833_403081785331651_7799751542654129265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQj8j9RKqpAAX88V3_G&_nc_ht=scontent-gru1-1.xx&oh=00_AfBHXRxMcvjfRwmc5S-4-qMmIiTingyH9rC5O7AY0tPfGg&oe=63EABE12',
          name: 'img',
        },  {
          src: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/307883833_403081785331651_7799751542654129265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQj8j9RKqpAAX88V3_G&_nc_ht=scontent-gru1-1.xx&oh=00_AfBHXRxMcvjfRwmc5S-4-qMmIiTingyH9rC5O7AY0tPfGg&oe=63EABE12',
          name: 'img',
        },  {
          src: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/307883833_403081785331651_7799751542654129265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQj8j9RKqpAAX88V3_G&_nc_ht=scontent-gru1-1.xx&oh=00_AfBHXRxMcvjfRwmc5S-4-qMmIiTingyH9rC5O7AY0tPfGg&oe=63EABE12',
          name: 'img',
        },  {
          src: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/307883833_403081785331651_7799751542654129265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQj8j9RKqpAAX88V3_G&_nc_ht=scontent-gru1-1.xx&oh=00_AfBHXRxMcvjfRwmc5S-4-qMmIiTingyH9rC5O7AY0tPfGg&oe=63EABE12',
          name: 'img',
        },  {
          src: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/307883833_403081785331651_7799751542654129265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQj8j9RKqpAAX88V3_G&_nc_ht=scontent-gru1-1.xx&oh=00_AfBHXRxMcvjfRwmc5S-4-qMmIiTingyH9rC5O7AY0tPfGg&oe=63EABE12',
          name: 'img',
        },  {
          src: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/307883833_403081785331651_7799751542654129265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQj8j9RKqpAAX88V3_G&_nc_ht=scontent-gru1-1.xx&oh=00_AfBHXRxMcvjfRwmc5S-4-qMmIiTingyH9rC5O7AY0tPfGg&oe=63EABE12',
          name: 'img',
        },
      ];
    } catch (e) {}
  }
}
