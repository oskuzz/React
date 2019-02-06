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
                columns: new[] { "CustomerID", "Email", "FirstName", "LastName", "Password", "PhoneNumber", "UserName" },
                values: new object[] { 2, "asdf@asd.asd", "asdf", "asdf", "asdasdasd", "123456789", "asdf" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "Service",
                table: "Customer",
                keyColumn: "CustomerID",
                keyValue: 2);
        }
    }
}
