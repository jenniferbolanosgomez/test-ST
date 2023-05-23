using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TESTAPI.Models
{
    public class Animal
    {

        [Key]
        public int AnimalId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Breed { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        public string Sex { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public string Status { get; set; }
    
    }
}
