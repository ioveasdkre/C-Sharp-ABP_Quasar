using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Barc.APS.Authorization.Roles;
using Barc.APS.Authorization.Users;
using Barc.APS.MultiTenancy;

namespace Barc.APS.EntityFrameworkCore
{
    public class APSDbContext : AbpZeroDbContext<Tenant, Role, User, APSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public APSDbContext(DbContextOptions<APSDbContext> options)
            : base(options)
        {
        }
    }
}
