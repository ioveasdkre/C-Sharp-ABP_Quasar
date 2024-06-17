using System.ComponentModel.DataAnnotations;

namespace Barc.APS.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}