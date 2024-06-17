using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Barc.APS.Configuration.Dto;

namespace Barc.APS.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : APSAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
