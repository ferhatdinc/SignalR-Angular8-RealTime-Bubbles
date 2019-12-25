import { Component, OnInit, NgZone } from '@angular/core';
import { MessageService } from '../services/message.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-os-chart',
  templateUrl: './os-chart.component.html',
  styleUrls: ['./os-chart.component.scss']
})
export class OsChartComponent implements OnInit {

  constructor(
    private messageService:MessageService,
    private _ngZone: NgZone
    ) {
      this.subscribeToEvents(); 
    }
  single: any[] = [
    {"name": "Android",
    "value": 1},
    {"name": "IOS",
    "value": 1}
  ];
  view: any[] = [700, 400];
  ngOnInit() {
    setTimeout(() => {
      // Charts are now rendered
      const chart = document.getElementById('chart');
      html2canvas(chart, {
        height: 500,
        width: 1000,
        scale: 2,
        backgroundColor: null,
        logging: false,
        onclone: (document) => {
          document.getElementById('chart').style.visibility = 'visible';
        }
      }).then((canvas) => {
        // Get chart data so we can append to the pdf
        const chartData = canvas.toDataURL();
        // Prepare pdf structure
        const docDefinition = { content: [],
        styles: {
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
          },
          subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
            alignment: 'left'
          },
          subsubheader: {
            fontSize: 12,
            italics: true,
            margin: [0, 10, 0, 25],
            alignment: 'left'
          },
          table: {
            margin: [0, 5, 0, 15]
          }
        },
        defaultStyle: {
          // alignment: 'justify'
        },
        pageOrientation: 'landscape',
      }; 
      });
    }, 1100);
  }
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Country';
   showYAxisLabel = true;
   yAxisLabel = 'Population';
   colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };


  onSelect(event) {
    console.log(event);
  }

  rederBarChart(){
  html2canvas(document.getElementById('barChart'), {height: 500})
    .then((canvas) => {
      document.body.appendChild(canvas);
    })
}

  rederGroupedBarChart(){
    html2canvas(document.getElementById('groupedBarChart'), {height: 500})
      .then((canvas) => {
        document.body.appendChild(canvas);
      });
  } 
  userData:any={};
  android:any[]=[];
  IOS:any[]=[];
  private subscribeToEvents(): void {
    this.messageService.messageReceived.subscribe((message: any) => {
      this._ngZone.run(() => {  
        switch (message.split("-",5)[2]) {
          case "Android":
            this.android.push(1);
            break;
          case "iOS":
            this.IOS.push(1);
            break;
        
          default:
            break;
        }
        console.log(message.split("-",5));
        console.log(this.single); 
        this.userData=[
          {
            "name": "Android",
            "value": this.android.length
          },{
            "name": "IOS",
            "value": this.IOS.length
          }
        ]
        this.single=[...this.userData];
        this.userData={}
      });
    });
  }
}
