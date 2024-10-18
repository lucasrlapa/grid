import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <ag-grid-angular
      class="ag-theme-quartz-dark" style="height: 500px"
      [rowData]="rowData" [columnDefs]="colDefs"
      rowSelection="multiple"
      [pagination]="pagination"
      [paginationPageSize]="paginationPageSize"
      [paginationPageSizeSelector]="paginationPageSizeSelector"
      [defaultColDef]="defaultColDef">
    </ag-grid-angular>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pagination = true;
  paginationPageSize = 10;
  paginationPageSizeSelector = [10, 20]

  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    floatingFilter: true,
  }

  rowData = [
    {marca: "Tesla", modelo: "Model Y", preco: 64950, eletrico: true},
    {marca: "Ford", modelo: "F-Series", preco: 33850, eletrico: false},
    {marca: "Toyota", modelo: "Corolla", preco: 29600, eletrico: false},
    {marca: "Chevrolet", modelo: "Silverado", preco: 42900, eletrico: false},
    {marca: "BMW", modelo: "iX", preco: 84900, eletrico: true},
    {marca: "Nissan", modelo: "Leaf", preco: 31490, eletrico: true},
    {marca: "Audi", modelo: "e-tron", preco: 65900, eletrico: true},
    {marca: "Porsche", modelo: "Taycan", preco: 82900, eletrico: true},
    {marca: "Mercedes-Benz", modelo: "EQC", preco: 67900, eletrico: true},
    {marca: "Hyundai", modelo: "Kona Electric", preco: 37990, eletrico: true},
    {marca: "Kia", modelo: "Niro EV", preco: 39990, eletrico: true},
    {marca: "Volkswagen", modelo: "ID.4", preco: 39995, eletrico: true},
    {marca: "Tesla", modelo: "Model 3", preco: 52990, eletrico: true},
    {marca: "Ford", modelo: "Mustang Mach-E", preco: 43695, eletrico: true},
    {marca: "Rivian", modelo: "R1T", preco: 73900, eletrico: true},
    {marca: "Lucid", modelo: "Air", preco: 77400, eletrico: true},
    {marca: "Honda", modelo: "Civic", preco: 22150, eletrico: false},
    {marca: "Mazda", modelo: "CX-5", preco: 26940, eletrico: false},
    {marca: "Subaru", modelo: "Outback", preco: 27470, eletrico: false},
    {marca: "Jeep", modelo: "Wrangler", preco: 33450, eletrico: false},
    {marca: "Chevrolet", modelo: "Bolt EV", preco: 31400, eletrico: true},
    {marca: "Nissan", modelo: "Altima", preco: 24750, eletrico: false},
    {marca: "Hyundai", modelo: "Tucson", preco: 25850, eletrico: false}
  ];
  
  colDefs: ColDef[] = [
    {
      field: "marca",
      headerName: "Marca",
      checkboxSelection: true
    },
    {
      field: "modelo",
      headerName: "Modelo"
    },
    {
      field: "preco",
      headerName: "Preço",
      valueFormatter: p => "R$ " + p.value.toLocaleString()
    },
    {
      field: "eletrico",
      headerName: "Elétrico"
    }
  ];
}
