
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
@RequestMapping("/api/sps/helloworld/v1/experiencias/")
public class ExperienciaController {
    
    @Autowired
    ExperienciaRepository experienciaRepository;
    
    @GetMapping("obtenerExperiencias")
    public List<Experiencia> obtenerDatosGenerales(){
        return experienciaRepository.findAll();
    }
    
    @GetMapping("obtenerExperiencia/{idExperiencia}")
    public Experiencia obtenerDatosGenerales(@PathVariable("idExperiencia") int idExperiencia){
        return experienciaRepository.findById(idExperiencia);
    }
    
    @PostMapping("registrarExperiencia")
    public Experiencia registrarExperiencia(@RequestBody Experiencia experiencia){
        return experienciaRepository.save(experiencia);
    }
    
    @PutMapping("editarExperiencia")
    public Experiencia editarExperiencia(@RequestBody Experiencia experiencia){
        return experienciaRepository.save(experiencia);
    }
    
    @DeleteMapping("eliminarExperiencia/{idExperiencia}")
    public void eliminarExperiencia(@PathVariable("idExperiencia") int idExperiencia){
        Experiencia experiencia = experienciaRepository.findById(idExperiencia);
        if(experiencia != null){
            experienciaRepository.delete(experiencia);
        }
    }
}
