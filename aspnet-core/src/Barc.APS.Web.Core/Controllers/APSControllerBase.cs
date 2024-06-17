using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Barc.APS.Controllers
{
    public abstract class APSControllerBase: AbpController
    {
        protected APSControllerBase()
        {
            LocalizationSourceName = APSConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
