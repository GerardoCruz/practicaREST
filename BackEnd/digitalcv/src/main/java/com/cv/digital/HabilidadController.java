
package com.cv.digital;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@RequestMapping("/api/sps/helloworld/v1/habilidades/")
public class HabilidadController {
    
    @Autowired
    HabilidadRepository habilidadRepository;
    
    @GetMapping("obtenerHabilidades")
    public List<Habilidad> obtenerHabilidades(){
        return habilidadRepository.findAll();
    }
    
    @GetMapping("obtenerHabilidad/{idHabilidad}")
    public Habilidad obtenerHabilidades(@PathVariable("idHabilidad") int idHabilidad){
        return habilidadRepository.findById(idHabilidad);
    }
    
    @PostMapping("registrarHabilidad")
    public Habilidad registrarHabilidad(@RequestBody Habilidad habilidad){
        return habilidadRepository.save(habilidad);
    }
    
    @PutMapping("editarHabilidad")
    public Habilidad editarHabilidad(@RequestBody Habilidad habilidad){
        return habilidadRepository.save(habilidad);
    }
    
    @DeleteMapping("eliminarHabilidad/{idHabilidad}")
    public void eliminarHabilidad(@PathVariable("idHabilidad") Integer idHabilidad){
        Habilidad habilidad = habilidadRepository.findById(idHabilidad);
        if( habilidad != null){
            habilidadRepository.delete(habilidad);
        }
    }
}
