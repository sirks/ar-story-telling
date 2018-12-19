import aframe from 'aframe';

window.onload = () => {
  document.getElementById('path_1').addEventListener('markerFound', () => window.location.href = 'test.html');
  document.getElementById('beatle').addEventListener('markerFound', () => window.location.href = 'test1.html');
};

const addListener=(link)=>{
  debugger;
  this.addEventListener('markerFound', () => window.location.href = link
  )
};
