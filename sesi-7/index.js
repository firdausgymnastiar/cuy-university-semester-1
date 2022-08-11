const http = require('http');
const fs = require('fs');
const rupiah = require('rupiah-format');
const host = 'localhost';
const port = 3002;
const os =require('os');

// request = data masuk dari client
// response = data keluar dari server

const server = http.createServer(function(request, response) {
    const nama = "firdaus gym";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);
    
    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data uang tersimpan')
    });
    
    const sisaRAM = os.freemem();
    const jumlahCPU = os.cpus();
    function checkCPU() {
        let myCPU = [];
        jumlahCPU.map((cpu, i) => {
            myCPU.push(cpu.model)
        })
        return myCPU[0]
    }

    const hasil = `<p>Halo nama saya ${nama}. saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}.</p>
    <h5>sisa RAM PC saya adalah ${sisaRAM}</h5>
    <h5>merk CPU PC saya adalah ${checkCPU()}</h5>`;
    
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function() {
    console.log(`server menyala di ${host}:${port} hehe`);
})