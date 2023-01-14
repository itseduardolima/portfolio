AOS.init();


AOS.init({
  
  // Configurações que podem ser substituídas por elemento, pelos atributos `data-aos-*`:
  offset: 120, // Offset (in px) from the original trigger point
  delay: 0, // Valores de 0 a 3000, com passo 50ms
  duration: 700, // Valores de 0 a 3000, com passo 50ms
  easing: 'ease', // Atenuação padrão para animações AOS
  once: false, // A animação deve acontecer apenas uma vez - enquanto rola para baixo
  mirror: false, // Os elementos devem ser animados ao passar por eles
  anchorPlacement: 'top-bottom', // Define qual posição do elemento em relação a janela deve acionar a animação

});