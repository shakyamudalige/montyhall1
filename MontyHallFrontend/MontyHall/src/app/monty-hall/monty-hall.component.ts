import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MontyHallService } from './monty-hall.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-monty-hall',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './monty-hall.component.html',
  styleUrl: './monty-hall.component.css'
})
export class MontyHallComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private montyHallService: MontyHallService
  ){}
  
  form: FormGroup = new FormGroup({
    Simulations : new FormControl(null),
    ChangeDoor : new FormControl(false)
  });

  wins: number = 0;
  loses: number = 0
  
  ngOnInit(): void {
  }

  onSubmit(){
    debugger;;
    this.montyHallService.simulate(this.form.value.Simulations, this.form.value.ChangeDoor).subscribe(res => {
      console.log(res);
      this.wins = res.wins;
      this.loses = res.loses;
    })
  }

}
