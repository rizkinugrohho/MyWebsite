gsap.registerPlugin(TextPlugin);
gsap.to('.helo',{duration: 1, text: 'HELLO'});
gsap.to('.nama',{duration: 1.5, delay: 1, text:  "I'M RIZKI NUGROHO"});
gsap.to('.alamat',{duration: 2, delay: 2, text: "I'm born in Surakarta, Indonesia."});
gsap.from('.sosial-media a', { duration: 2.5, delay: 2, x: -100, opacity: 0, ease: 'back' });