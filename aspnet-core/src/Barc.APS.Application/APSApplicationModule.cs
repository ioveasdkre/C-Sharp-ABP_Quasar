using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Barc.APS.Authorization;

namespace Barc.APS
{
    [DependsOn(
        typeof(APSCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class APSApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<APSAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(APSApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
