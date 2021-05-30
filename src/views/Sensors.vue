<template>
  <div class="sensors">
    <h2>Sensores</h2>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;" >
      <div class="card m-2" style="width: 18rem;" v-for="sensor in sensors" :key="sensor.id">
        <div class="card-body">
          <h5 class="card-title">{{sensor.mac}}</h5>
          <p class="card-text">{{sensor.description}}</p>
          <div class="">
            <a href="#" class="btn btn-success m-1">🖉</a>
            <a href="#" class="btn btn-danger m-1">␡</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sensors',
  data(){
    return{
      sensors:[]
    }
  },
  beforeCreate(){
    fetch("https://dlm.emconsol.com/dlm/api/v1/sensor",{
      method: "GET",
    }).then(response => response.json().then(data =>{
      this.sensors = data
      console.log(this.sensors)
    }))
  }
}
</script>
