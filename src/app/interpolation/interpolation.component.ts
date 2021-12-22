import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: ['h2{font-size:30px;color:rebeccapurple}'],
  styleUrls: ['./interpolation.component.css'],
  providers: []
})
export class InterpolationComponent implements OnInit {

  title = 'Interpolation,Property,Class Binding in Angular';
  name = 'Ahmed';
  chng = false;
  comp = 'test';
  imgSrc = {
    link: 'https://images.unsplash.com/photo-1638913658211-c999de7fe786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    height: '200px',
    width: '200px',
  };
  test = [
    'test',
    'test',
    'uio',
    'polll',
    function () {
      console.log('ksdjfksdj')
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeCss(texts: any) {
    if (this.chng) {
      this.chng = false;
      this.title=this.title.toUpperCase();
    } else {
      this.chng = true;
      this.title=this.title.toLowerCase();
      console.log("vghjfvgh",this.title)
    }
  }

}
