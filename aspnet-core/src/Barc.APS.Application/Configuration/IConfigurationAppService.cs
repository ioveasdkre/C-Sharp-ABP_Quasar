using System.Threading.Tasks;
using Barc.APS.Configuration.Dto;

namespace Barc.APS.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
