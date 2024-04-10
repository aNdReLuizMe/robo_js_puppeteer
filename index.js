const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor');

async function robo() {
   const browser = await puppeteer.launch( { headless: true });
   const page = await browser.newPage();

   const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'real';
   const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'euro';

   const pageMoeda = `https://www.google.com.br/search?q=conversor+${moedaBase}+para+${moedaFinal}&sca_esv=b9d6d2bbf88385f9&sxsrf=ACQVn0-E2eFLxFWVUKMVSsNrx_zfnvls4g%3A1711727246577&source=hp&ei=juIGZsiOIOSS5OUPxfmQwAg&iflsig=ANes7DEAAAAAZgbwnpe-ZsDPcFXQmKS4Cj7sYT_RZ1IQ&udm=&ved=0ahUKEwjIje3z6JmFAxVkCbkGHcU8BIgQ4dUDCBU&uact=5&oq=conversor+${moedaBase}+para+${moedaFinal}&gs_lp=Egdnd3Mtd2l6Ihljb252ZXJzb3IgZG9sYXIgcGFyYSByZWFsMgoQABiABBhGGIICMgUQABiABDIFEAAYgAQyBhAAGBYYHjIIEAAYFhgeGAoyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IqD9QugZY8j1wDHgAkAEAmAGnAaABmCiqAQQwLjM2uAEDyAEA-AEBmAIwoALaKagCCsICBxAjGOoCGCfCAgoQIxiABBiKBRgnwgIEECMYJ8ICChAAGIAEGIoFGEPCAg4QLhiABBixAxjHARjRA8ICCxAAGIAEGLEDGIMBwgIPECMYgAQYigUYJxhGGIICwgIQEAAYgAQYigUYQxixAxiDAcICCBAAGIAEGLEDwgIQEC4YgAQYigUYQxjHARjRA8ICDBAAGIAEGIoFGEMYCsICERAuGIAEGLEDGIMBGMcBGNEDwgIIEC4YgAQYsQPCAgsQLhiABBixAxiDAcICDRAAGIAEGIoFGEMYsQPCAhMQLhiABBiKBRhDGLEDGMcBGNEDwgIIEAAYgAQYyQPCAg0QABiABBgKGLEDGIMBwgIKEAAYgAQYChixA8ICBxAAGIAEGAqYAweSBwUxMi4zNqAHtqkC&sclient=gws-wiz`;

   await page.goto(pageMoeda);
   // await page.screenshot({ path: 'example.png' });

   const resultado = await page.evaluate(() => {
      return document.querySelector('.lWzCpb.a61j6').value;
   })

   console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é de: ${resultado}`)
   await browser.close();
}

robo();

