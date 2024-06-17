using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Barc.APS.EntityFrameworkCore
{
    public static class APSDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<APSDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<APSDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
