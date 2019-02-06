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

        public DbSet<Customer> Customer { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString, a => a.MigrationsHistoryTable("MigrationHistory", "Internal"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Customer>()
                .ToTable("Customer", schema: "Service");

            modelBuilder.Entity<Customer>()
                .HasKey(c => c.CustomerID);
            modelBuilder.Entity<Customer>()
                .HasData(new Customer { CustomerID = 1, FirstName="asd", LastName="asd", Email="asd@asd.asd", PhoneNumber="123456789", UserName="asd", Password="asdasd" });
            modelBuilder.Entity<Customer>()
               .HasData(new Customer { CustomerID = 2, FirstName = "asdf", LastName = "asdf", Email = "asdf@asd.asd", PhoneNumber = "123456789", UserName = "asdf", Password = "asdasdasd" });

        }
    }
}
