// Sahne oluştur
const scene = new THREE.Scene();

// Kamera oluştur
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer oluştur
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Işık oluştur
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// STL yükleyici oluştur
const loader = new THREE.STLLoader();

// STL dosyasını yükle ve sahneye ekle
loader.load('Cizim1_3D.stl', function (geometry) {
    const material = new THREE.MeshPhongMaterial({ color: 0xAAAAAA, specular: 0x111111, shininess: 200 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
});

// Animasyon
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Yeniden boyutlandırma olay dinleyicisi
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
