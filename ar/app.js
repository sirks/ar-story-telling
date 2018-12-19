import aframe from 'aframe';

window.onload = () => {
  for (let marker of document.getElementsByTagName('a-marker')){
    const href = marker.getAttribute('href');
    marker.addEventListener('markerFound', () => window.location.href = href)
  }
};