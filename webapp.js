const express = require ('express');

const aplicacion = express();

aplicacion.get('/',function(peticion, respuesta){
    respuesta.type("html")
    const fecha=new Date();
    respuesta.send(` <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
        <title>Music Point!</title>
      </head>

      <body>

    <div class="container-fluid bg-danger ">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-auto">
                                <a class="navbar-brand" href="index.html">MPoint...<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="10%"><path d="M335.72 330.76C381.73 299.5 416 251.34 416 192a160 160 0 00-320 0v206.57c0 44.26 35.74 81.43 80 81.43h0c44.26 0 66.83-25.94 77.29-40 14.77-19.81 41.71-81.56 82.43-109.24z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M160 304V184c0-48.4 43.2-88 96-88h0c52.8 0 96 39.6 96 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M160 239c25-18 79.82-15 79.82-15 26 0 41.17 29.42 26 50.6 0 0-36.86 42.4-41.86 61.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                  <ul class="navbar-nav lead flex-column">
                                      
                                  <h6>${fecha} </h6>
                                  <li class="nav-item">
                                        <a class="nav-link" href="music.html">Canciones</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="login.html">Login</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="registro.html" tabindex="-1" aria-disabled="false">Registro</a>
                                      </li>
                                      <li>
                                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Contact Us...
                                          </button>
                                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5 class="modal-title" id="exampleModalLabel">Let us hear you</h5>
                                                 </div>
                                                <div class="modal-body">
                                                    <ul>
                                                        <li class="list-unstyled"> <a class="link-dark" href="https://www.lamega.com.gt/"><svg width="5%" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Globe</title><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416M464 256H48"/></svg></a></li>
                                                        <li class="list-unstyled">Tel. oficina +502 2505-1212</li>
                                                        <li class="list-unstyled">Tel. cabina +502 2505-1227 / 1277</li>
                                                        <li class="list-unstyled"> WhatsApp +502 5514-7777</li>
                                                    </ul>
                                                    
                                                   
                                                </div>
                                                <div class="modal-footer">
                                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                           
                                      </li>
                                    </ul>
                                  </div>
                                
                            </div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </nav>
            </div>
        </div>
    </div>
    <hr />
    
    
    <div class="container-fluid">
      <div class="row ">
        <div class="col-12 col-md-4 text-center">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/MUSIC%20PROYECT/img/music1.jpg" class="d-block w-100 img-fluid" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/MUSIC%20PROYECT/img/music2.jpg" class="d-block w-100 img-fluid" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/MUSIC%20PROYECT/img/music3.jpg" class="d-block w-100 img-fluid" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-8">
         
              <h3 class="cargar text-sm-start text-center"> Lista HOT</h3>
              <hr />
              <div id="top4" class="text-sm-start"></div>
              <div id="ruta4" class="col-12"></div>
              <hr />
              <div id="top8"class="text-sm-start"></div>
              <div id="ruta8" class="col-12"></div>
              <hr />
    
              <div id="top12" class="text-sm-start"></div>
              <div id="ruta12" class="col-12"></div>
            </div>   
        
      </div>
    </div>
    
    <div class="container-fluid">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a  href="https://www.billboard.com/" class="nav-link px-2 text-muted" >Comparte musica...</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">@Derechos Reservados</a></li>
          </ul>
          <p class="text-center text-muted">&copy; 2022 OYE CO.</p>
        </footer>
      </div>
        <!-- Optional JavaScript; choose one of the two! -->
    
        <!-- Option 1: Bootstrap Bundle with Popper -->
        
     
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        -->
        <script src="/js/jquery-3.6.0.min.js"></script>
        <script src="/js/js3.js"></script>
      </body>
    </html>`);
});

aplicacion.get('/acerca_de',function(peticion, respuesta){
    respuesta.set('Content-Type','text/html');
    respuesta.sendFile(__dirname+"/public/acerca_de.html")
})
aplicacion.listen(8080,function(){
    console.log("servidor Iniciado")
});