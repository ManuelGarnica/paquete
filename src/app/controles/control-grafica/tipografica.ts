import { Injectable } from '@angular/core';

@Injectable()
export class TipoGrafica {
  public static linea:string = 'line';
  public static barras:string = 'bar';
  public static dona:string = 'doughnut';
  public static radar:string = 'radar';
  public static pay:string = 'pie';
  public static area:string = 'polarArea';
}  
