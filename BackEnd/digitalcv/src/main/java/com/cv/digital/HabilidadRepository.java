
package com.cv.digital;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Gerardo__Cruz
 */
public interface HabilidadRepository extends Repository<Habilidad, Integer>{
    
   public List<Habilidad> findAll();
   
   public Habilidad findById(Integer id);
   
   public Habilidad save(Habilidad habilidad);
   
   public void delete(Habilidad habilidad);
    
}
