<template>
  <div class="measurments">
    <h2>Mediciones</h2>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">Temperatura</th>
      <th scope="col">Humedad</th>
      <th scope="col">Sensor</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="measure in measurements" :key="measure.id">
      <th scope="row">{{measure.id}}</th>
      <td>{{measure.date}}</td>
      <td>{{measure.temperature}}°</td>
      <td>{{measure.humidity}}%</td>
      <td>
        {{measure.sensor.mac}} 
        <b-icon icon="camera"></b-icon>
        <button type="button" class="btn btn-outline-success">👁</button>
      </td>
      <td>
        <button type="button" class="btn btn-outline-danger">␡</button>
      </td>
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'Measurements',
  data (){
    return{
      measurements: []
      }
  },
  methods:{
    update: function(){
      fetch("https://dlm.emconsol.com/dlm/api/v1/measurement",{
        method: "GET",
      }).then(response => response.json().then(data =>{
        this.measurements = JSON.parse(data)
        this.measurements.forEach(element => {
          element.date = new Date(element.date)
        });
        console.log(this.measurements)
      }))
    }
  },
  beforeCreate(){
    fetch("https://dlm.emconsol.com/dlm/api/v1/measurement",{
      method: "GET",
    }).then(response => response.json().then(data =>{
      this.measurements = data
      console.log(this.measurements)
    }))
  }
}
</script>
<style >
</style>
