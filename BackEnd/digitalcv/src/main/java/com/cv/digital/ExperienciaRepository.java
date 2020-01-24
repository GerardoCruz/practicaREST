
package com.cv.digital;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Gerardo__Cruz
 */
public interface ExperienciaRepository extends Repository<Experiencia, Integer>{
    
   public List<Experiencia> findAll();
   
   public Experiencia findById(int id);
    
   public Experiencia save(Experiencia experiencia);
   
   public void delete(Experiencia experiencia);
}
