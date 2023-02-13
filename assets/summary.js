const templateSummary = document.createElement('template');
templateSummary.innerHTML = 
`<style>
.card-item{
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  padding: 20px;
  border-radius: 4px;
  min-height: 200px;
  max-height: 280px;
  height:280px;
}
.card-item h2.card-title {
  margin: 0;
  font-size: 20px;
  line-height: 35px;
}
.summary-card-details{
display: flex;
flex-wrap: wrap;
align-items: center;
height: calc(280px - 50px);
}
.summary-item {
display: flex;
align-items: center;
flex-direction: column;
}
.f-50{
flex-basis: 50%;
}
.f-100{
flex-basis: 100%;
}
.summary-item.total-absence .number {
color: #ff0000;
}
.summary-item.fill-rate .number {
color: #03be02;
}
.summary-item.unified-absence .number {
color: #627072;
}
.summary-item .number {
font-size: 40px;
line-height: 52px;
font-weight: bold;
}
 </style>
<div class="card-item">
 <div class="card-header">
     <h2 class="card-title">Summary</h2>
 </div>
 <div class="date">
   Wednesday, November 22 2022
 </div>
 <div class="summary-card-details">
     <div class="summary-item f-50 total-absence">
         <div class="number" id="total-absence">382</div>
         <div class="text">Total Absence</div>
     </div>
     <div class="summary-item f-50 fill-rate">
       <div class="number" id="fill-rate">62.9 %</div>
       <div class="text">Fill Rate</div>
   </div>
   <div class="summary-item f-100 unified-absence">
     <div class="number" id="unified-absence">98</div>
     <div class="text">Unified Absence</div>
 </div>
</div>
</div>
`
class Summary extends HTMLElement {
  
    constructor(){
      super()
  }
  
    connectedCallback() {
      console.log('connected-call')
      const shadow = this.attachShadow({mode: 'open'})
      shadow.append(templateSummary.content.cloneNode(true));
    //   console.log(this.getAttribute('name'))
      this.shadowRoot.getElementById('total-absence').innerText = this.getAttribute('total');
      this.shadowRoot.getElementById('fill-rate').innerText = this.getAttribute('fillrate');
      this.shadowRoot.getElementById('unified-absence').innerText = this.getAttribute('unifiedabsence');
    }
  }
  
  
  customElements.define("summary-status", Summary);