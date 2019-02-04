using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication2.Migrations
{
    public partial class seed2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                schema: "Service",
                table: "Customer",
                columns: new[] { "CustomerID", "Email", "FirstName", "LastName", "Password", "ProneNumber", "UserName" },
                values: new object[] { 1, "asd@asd.asd", "asd", "asd", "asdasd", "123456789", "asd" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "Service",
                table: "Customer",
                keyColumn: "CustomerID",
                keyValue: 1);
        }
    }
}
