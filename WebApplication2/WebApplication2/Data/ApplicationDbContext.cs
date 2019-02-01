using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Tables;

namespace WebApplication2.Data
{
    public class ApplicationDbContext : DbContext
    {
        public string ConnectionString = @"Server = LAPTOP-JHHCFN8D; Database = React; Trusted_Connection = true";

        public DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString, a => a.MigrationsHistoryTable("MigrationHistory", "Internal"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>()
                .ToTable("User", schema: "Service");

            modelBuilder.Entity<User>()
                .HasKey(u => u.UserID);
        }
    }
}
