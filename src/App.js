import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} 
from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import  {Dropdown}  from 'react-bootstrap';
import  { useState } from "react";
import { NavLink } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './App.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import home from "./home";














export default function App() {
  return (
    
  
    
    <Router>
   <nav>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href=".home">Hardware Bros.</Navbar.Brand>
    <Nav className="mr-auto">
    <Link to="/home">pocetna</Link>
    <Link to="/about">Pojmovnik</Link>
    <Nav.Link href="assemble1.html">Build it</Nav.Link>
    <Link to="/uporedi">Uporedi</Link>
    <Link to="/prelistaj">Prelistaj</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Pretrazi</Button>
    </Form>
  </Navbar>
  </nav>  
        

        {/* . */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/uporedi">
            <Uporedi />
          </Route>
          <Route path="/prelistaj">
            <Prelistaj />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

function Home(){
  return <><div class="context">
  <h1>Dobrodošli U Hardware Bros.</h1>
</div>


<div class="area">

      <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
      </ul>
</div ></>
}


 

const About = () => {
  return (
    <>
    <MDBTable  striped>
      <MDBTableHead color="primary-color" textBlack>
        
        <th className="text-center" id="heder" colspan="5" >Pojmovnik</th>
      
        
        
          <tr class="tabela">
          <th>#</th>
          <th>Pojam</th>
          <th>Objasnjenje</th>
          <th>Komponenta</th>
          <th>Bitnost</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td> <bold>Frekvencija</bold></td>
          <td>Brzina takta se obično odnosi na frekvenciju na kojoj generator takta procesora može generirati impulse, koji se koriste za sinhronizaciju rada njegovih komponenti,i koristi se kao pokazatelj brzine procesora.</td>
          <td>Cpu</td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>2</td>
          <td><bold>Brzina Sabirnice</bold></td>
          <td>Brzina sabirnice obično se odnosi na brzinu prednje bočne sabirnice (FSB), koja povezuje CPU sa Northbridgeom</td>
          <td>Cpu</td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>3</td>
          <td>NorthBridge</td>
          <td>NorthBridge je logicki cip Na maticnoj ploci koji je zaduzen za komunikaciju izmedju cpu-a Gpu-a i  nekada Rama sa Southbridg-om</td>
          <td>Maticne ploce</td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>4</td>
          <td>Southbridge</td>
          <td>Soutbridge je drugi Logicki cip na maticnoj ploci koji kontrolise sve funkcije izlazno/ulaznih uredjaja</td>
          <td>Maticne ploce</td>
          <td>/</td>

        </tr>
        <tr>
          <td>5</td>
          <td>Kepler</td>
          <td>Arhitektrua Nvidiinih Grafickih kartica koje su se fokusirale na programabilnost i performace</td>
          <td>GPU</td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>6</td>
          <td>Rpm</td>
          <td>Rpm je broj rotacija koju aktuator hard diska moze izvrsiti u minuti  </td>
          <td>HDD</td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>7</td>
          <td>PCI-e</td>
          <td>PCI-e je interfejsni standard za konektovanje jako brzih komponenti u racunaru</td>
          <td>Maticne ploce</td>
          <td>Srednje Bitno</td>

        </tr>
        <tr>
          <td>8</td>
          <td>Teoretska Snaga</td>
          <td>Je snaga Koje Prozivodjaci Napojnih jedinica Obecavaju da modeli  mogu isporuciti U vecini slucajeve neistinito</td>
          <td>PSU</td>
          <td>Jako bitno</td>

        </tr>
        <tr>
          <td>9</td>
          <td>Spd brzina</td>
          <td>Spd je standardizovan nacin za detektovanje rama U racunaru  i fabricki  tajmnzi i brzine Koje se korsite </td>
          <td>Ram</td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>10</td>
          <td>Brzina citanja</td>
          <td>Brzina citanja je  Karakterstika memorije i SSd-ova kojom se opisuje brzina kojom SSD ucitava podatke koji se nalaze na njemu</td>
          <td>SSD</td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>11</td>
          <td>Sirina Sabirnice</td>
          <td>Sirina Sabirnice je maximalna kolicana podataka koja se moze proseuirati u jednom trenutku</td>
          <td>cpu</td>
          <td>Srednje Bitno</td>

        </tr>
        <tr>
          <td>12</td>
          <td>GDDR5</td>
          <td>Graphics Double Data Rate 5 Synchronous  je moderni tip sinhrone grafičke memorije sa slučajnim pristupom (SGRAM) sa sučeljem velike propusnosti ("dvostruka brzina prenosa podataka") dizajniran za upotrebu na grafičkim karticama.
</td>
          <td>Gpu</td>
          <td>Srednje Bitno</td>

        </tr>

        <tr>
          <td>13</td>
          <td>SATA III</td>
          <td>je sučelje sabirnice računala koje povezuje adaptere sabirnice računala s uređajima za masovno pohranjivanje podataka, kao što su pogoni tvrdog diska, optički pogoni i SSD pogoni sa podrzanim brzinama od 600MB/s</td>
          <td>SSD</td>
          <td>BITno</td>

        </tr>
        <tr>
          <td>13</td>
          <td>SATA II</td>
          <td>je sučelje sabirnice računala koje povezuje adaptere sabirnice računala s uređajima za masovno pohranjivanje podataka, kao što su pogoni tvrdog diska, optički pogoni i SSD pogoni sa podrzanim brzinama od 300MB/s</td>
          <td>SSD/HDD</td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>14</td>
          <td>Spd latencija</td>
          <td>Spd latencija je Vrijeme koje potrebno Ram memoriji izmedju osvjezavanju pristnupanju  adresa, ucitavanju i citanju u lokcaije; i alociranju memorije </td>
          <td>RAM</td>
          <td>Jako bitno</td>

        </tr>
        <tr>
          <td>15</td>
          <td>Brzina Pisanja</td>
          <td>Brzina Pisanja Je vrijemo Potrbno SSD/HDD da Skladisti nove podatke</td>
          <td>SSD/HDD</td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>16</td>
          <td>Lvl1 cahe</td>
          <td>Lvl1 cahe je Primarni Cache Ugradje u cpu u kome se cuvaju informacije kojima je procesor nedavno pristupio</td>
          <td>cpu</td>
          <td> Jako Bitno</td>

        </tr>
        <tr>
          <td>17</td>
          <td>Flop</td>
          <td>Konkretno, teraflop se odnosi na sposobnost procesora da izračuna jedan bilion operacija sa pokretnom zarezom u sekundi. Recimo da nešto ima “6 TFLOPS”, na primjer, znači da je njegova postavka procesora sposobna da u prosjeku obrađuje 6 bilijuna izračunavanja s pokretnom zarezom svake sekunde.
</td>
          <td>CPU/GPU</td>
          <td>Bitno</td>

        </tr>

        <tr>
          <td>18</td>
          <td>DVI</td>
          <td>Digitalni vizuelni interfejs (DVI) je interfejs za video prikaz koji je razvila Radna grupa za digitalni prikaz (DDWG). Digitalno sučelje koristi se za povezivanje izvora video zapisa, kao što je kontroler video prikaza, sa uređajem za prikaz, poput računarskog monitora.</td>
          <td>Mticne ploce/gpu</td>
          <td>Srednje Bitno</td>

        </tr>
        <tr>
          <td>19</td>
          <td>Voltaza</td>
          <td>Voltaza ili napon se odnosti na vrijednost Potrosene sange pc komponenti. Povecavanjem i samnjivanjem Voltaze mozemo povecati  ili smanjiti brzine rama, cpu i gpu. proporcinalno tome povecati i samnjiti temepreture istih.  </td>
          <td>CPU/Ram/Gpu</td>
          <td>Srednje Bitno</td>

        </tr>
        <tr>
          <td>20</td>
          <td>Lvl2 cache</td>
          <td></td>
          <td>SSD/HDD</td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>21</td>
          <td>Memordijska Kofiguracija</td>
          <td>Nacin alociranja memorije</td>
          <td>Memorija/maticna ploca/cpu</td>
          <td> Jako Bitno</td>

        </tr>
        <tr>
          <td>21</td>
          <td>Lvl3 cache </td>
          <td>lvl3 cache hrani lvl2 cache</td>
          <td>Cpu </td>
          <td>Bitno</td>

        </tr>
        <tr>
          <td>22</td>
          <td>MOT </td>
          <td>Maximalna operativan temepertura</td>
          <td>Cpu/gpu </td>
          <td>Manje Bitno</td>

        </tr>
        <tr>
          <td>23</td>
          <td>Texture rate</td>
          <td>Brzina filtra teksture GPU-a predstavlja koliko piksela (konkretno 'teksela') GPU može prikazati u sekundi. Ova vrijednost je uvijek predstavljena kao mjerenje kroz vrijeme (1s). Brzina punjenja teksture od 144,1GT / s iznosi 144,1 milijarde teksela (teksturirani elementi slike) u sekundi.</td>
          <td>gpu </td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>24</td>
          <td>broj Jezgra procesora</td>
          <td>Procesori sa vise jezgara imaju vecu moc pri pokretanju vise proceosra</td>
          <td>cpu </td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>25</td>
          <td>Broj Niti procesora</td>
          <td>Broj niti Procesora je broj virtualnih jezgara procesora</td>
          <td>cpu </td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>26</td>
          <td>Shading unit</td>
          <td>Jezgra zasluznja za renderovanje geometrije, pixela vertexa</td>
          <td>cpu </td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>27</td>
          <td>Streaming procesor</td>
          <td>Stream obrada je tehnika programiranja koja pojednostavljuje hardversku i softversku paralelnu obradu. Procesori toka u GPU-u obrađuju većinu tradicionalnih zadataka prikazivanja grafike ili se mogu alternativno programirati za općenitije drobljenje brojeva.</td>
          <td>Gpu </td>
          <td>Jako Bitno</td>

        </tr>
        <tr>
          <td>28</td>
          <td>Streaming multiprocesor</td>
          <td>Stream obrada je tehnika programiranja koja pojednostavljuje hardversku i softversku paralelnu obradu. Procesori toka u GPU-u obrađuju većinu tradicionalnih zadataka prikazivanja grafike ili se mogu alternativno programirati za općenitije drobljenje brojeva.</td>
          <td>cpu </td>
          <td>manje Bitno</td>

        </tr>
        <tr>
          <td>29</td>
          <td>Rop</td>
          <td>Render Output pipeline  za renderovanje Ivica geometrijskih tijela koji se preklapaju jedan preko druge.</td>
          <td>Gpu </td>
          <td>Jako Bitno</td>

        </tr>
        
        
      </MDBTableBody>
    </MDBTable>


<MDBFooter color="blue" className="font-small pt-4 mt-4">
<MDBContainer fluid className="text-center text-md-left">
  <MDBRow>
    <MDBCol md="6">
      <h5 className="title">Napoomena:</h5>
      <p>
         Pojmovnik je napravljen kako bi se obratila paznja na bitne karakteristike Komponenti
      </p>
    </MDBCol>
 
  </MDBRow>
</MDBContainer>
<div className="footer-copyright text-center py-3">
  <MDBContainer fluid>
    &copy; {new Date().getFullYear()} Napravio: <a href="https://www.mdbootstrap.com"> Emir Dadanovic </a>
  </MDBContainer>
</div>
</MDBFooter>
</>
  
  );

}



function Uporedi() {

  return <h2>yuup</h2>;
}
function Prelistaj() {

  return <div class="container">
  <div class="row">
    <div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika1.jpg" />
  <Card.Body>
    <Card.Title>Intel CPU</Card.Title>
    
    <Button variant="primary" href="intelcpu.html"> Prelsitaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika2.jpg" />
  <Card.Body>
    <Card.Title>AMD CPU</Card.Title>
    
    <Button variant="primary" href="amdcpu.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika3.jpg" />
  <Card.Body>
    <Card.Title>AMD GPU</Card.Title>
   
    <Button variant="primary" href="amdgpu.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika4.jpg" />
  <Card.Body>
    <Card.Title>Nvidia Gpu</Card.Title>
    
    <Button variant="primary" href="nvidiagpu.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika5.jpg" />
  <Card.Body>
    <Card.Title>RAM Memorijda</Card.Title>
    
    <Button variant="primary" href="memorija.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika6.jpg" />
  <Card.Body>
    <Card.Title>PSU</Card.Title>
    
    <Button variant="primary"href="napojnejedinice.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika7.jpg" />
  <Card.Body>
    <Card.Title>Matice ploce</Card.Title>
    
    <Button variant="primary" href="maticneploce.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika8.jpg" />
  <Card.Body>
    <Card.Title>SSD</Card.Title>
    
    <Button variant="primary"href="ssd.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
<div class="col-lg-4 col-sm-6 col-xs-12 col-md-12" width="100%"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="slika9.jpg" />
  <Card.Body>
    <Card.Title>HDD</Card.Title>
    
    <Button variant="primary" href="hdd.html">Prelistaj</Button>
  </Card.Body>
</Card>;
</div>
</div>
</div>
}
