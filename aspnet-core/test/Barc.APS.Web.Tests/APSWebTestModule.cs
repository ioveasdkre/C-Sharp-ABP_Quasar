using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Barc.APS.EntityFrameworkCore;
using Barc.APS.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Barc.APS.Web.Tests
{
    [DependsOn(
        typeof(APSWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class APSWebTestModule : AbpModule
    {
        public APSWebTestModule(APSEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(APSWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(APSWebMvcModule).Assembly);
        }
    }
}