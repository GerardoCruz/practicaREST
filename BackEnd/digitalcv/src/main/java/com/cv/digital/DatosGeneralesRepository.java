 
package com.cv.digital;

import java.util.List; 
import org.springframework.data.repository.Repository; 

/**
 *
 * @author Gerardo__Cruz
 */
public interface DatosGeneralesRepository extends Repository<DatosGenerales, Integer>{ 
   public List<DatosGenerales> findAll();   
   
}
