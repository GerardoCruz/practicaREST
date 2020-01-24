 
package com.cv.digital;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Gerardo__Cruz
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api/sps/helloworld/v1/generales/")
public class DatosGeneralesController {
    
    @Autowired
    DatosGeneralesRepository datosGeneralesService;
    
    @GetMapping("obtenerDatos")
    public List<DatosGenerales> obtenerDatosGenerales(){
        return datosGeneralesService.findAll();
    }
}
