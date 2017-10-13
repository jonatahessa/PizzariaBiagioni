package br.com.pizzariadomenico.Daos;

import br.com.pizzariadomenico.Connection.ConnectionUtils;
import br.com.pizzariadomenico.Process.Produto;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jonata
 */
public class DaoProduto {

    public static List<Produto> executarConsulta(String sql) throws SQLException, Exception {
        List<Produto> listaPizza = null;
        Connection connection = null;
        Statement statement = null;
        ResultSet result = null;
        try {
            connection = ConnectionUtils.getConnection();
            statement = connection.createStatement();
            System.out.println("Executando CONSULTA SQL: " + sql);
            result = statement.executeQuery(sql);
            while (result.next()) {
                if (listaPizza == null) {
                    listaPizza = new ArrayList<Produto>();
                }
                Produto pizza = new Produto();
                pizza.setCodigo(result.getInt("ID"));
                pizza.setNome(result.getString("Nome"));
                pizza.setDescricao(result.getString("Descricao"));
                pizza.setPrecoBroto(result.getString("PrecoBroto"));
                pizza.setPrecoGrande(result.getString("PrecoGrande"));
                pizza.setPrecoFamilia(result.getString("PrecoFamilia"));
                pizza.setAtivo(result.getString("Ativo"));
                pizza.setTipo(result.getString("Tipo"));
                listaPizza.add(pizza);
            }
        } finally {
            if (result != null && !result.isClosed()) {
                result.close();
            }
            if (statement != null && !statement.isClosed()) {
                statement.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
        return listaPizza;
    }

    public static List<Produto> listarManutencao()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas ORDER BY Nome;";

        return executarConsulta(sql);
    }

    public static List<Produto> listarPaginaInicialPizzas()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas WHERE Ativo = 'SIM' AND "
                + "Tipo = 'PIZZA' ORDER BY Nome;";

        return executarConsulta(sql);
    }
    
    public static List<Produto> listarPaginaInicialMassas()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas WHERE Ativo = 'SIM' AND "
                + "Tipo = 'MASSA' ORDER BY Nome;";

        return executarConsulta(sql);
    }
    
    public static List<Produto> listarPaginaInicialCombinados()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas WHERE Ativo = 'SIM' AND "
                + "Tipo = 'COMBINADO' ORDER BY Nome;";

        return executarConsulta(sql);
    }
    
    public static List<Produto> listarPaginaInicialSobremesas()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas WHERE Ativo = 'SIM' AND "
                + "Tipo = 'SOBREMESA' ORDER BY Nome;";

        return executarConsulta(sql);
    }
    
    public static List<Produto> listarPaginaInicialPizzasDoces()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas WHERE Ativo = 'SIM' AND "
                + "Tipo = 'DOCE' ORDER BY Nome;";

        return executarConsulta(sql);
    }
    
    public static List<Produto> listarPaginaInicialBebidas()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas WHERE Ativo = 'SIM' AND "
                + "Tipo = 'BEBIDA' ORDER BY Nome;";

        return executarConsulta(sql);
    }
    
    public static List<Produto> listarPaginaInicialPromocoes()
            throws SQLException, Exception {
        String sql = "SELECT * FROM Pizzas WHERE Ativo = 'SIM' AND "
                + "Tipo = 'PROMOCAO' ORDER BY ID;";

        return executarConsulta(sql);
    }

    public static void inserir(Produto pizza)
            throws SQLException, Exception {

        String sql = "INSERT INTO Pizzas (Nome, Descricao, PrecoBroto,"
                + " PrecoGrande, PrecoFamilia, Ativo, Tipo) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?)";
        Connection connection = null;
        PreparedStatement statement = null;
        try {
            connection = ConnectionUtils.getConnection();
            statement = connection.prepareStatement(sql);

            statement.setString(1, pizza.getNome());
            statement.setString(2, pizza.getDescricao());
            statement.setString(3, pizza.getPrecoBroto());
            statement.setString(4, pizza.getPrecoGrande());
            statement.setString(5, pizza.getPrecoFamilia());
            statement.setString(6, "SIM");
            statement.setString(7, pizza.getTipo());
            System.out.println(statement.toString());

            System.out.println("Executando COMANDO SQL: " + sql);
            statement.execute();
        } finally {
            if (statement != null && !statement.isClosed()) {
                statement.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
    }

    public static void desativar(int id)
            throws SQLException, Exception {
        String sql = "UPDATE Pizzas SET Ativo = ?"
                + " WHERE ID = ?; ";
        Connection connection = null;
        PreparedStatement statement = null;
        try {
            connection = ConnectionUtils.getConnection();
            statement = connection.prepareStatement(sql);
            statement.setString(1, "NÃO");
            statement.setInt(2, id);
            System.out.println("Executando COMANDO SQL: " + sql);
            statement.execute();
        } finally {
            if (statement != null && !statement.isClosed()) {
                statement.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
    }

    public static void ativar(int id)
            throws SQLException, Exception {
        String sql = "UPDATE Pizzas SET Ativo = ?"
                + " WHERE ID = ?; ";
        Connection connection = null;
        PreparedStatement statement = null;
        try {
            connection = ConnectionUtils.getConnection();
            statement = connection.prepareStatement(sql);
            statement.setString(1, "SIM");
            statement.setInt(2, id);
            System.out.println("Executando COMANDO SQL: " + sql);
            statement.execute();
        } finally {
            if (statement != null && !statement.isClosed()) {
                statement.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
    }

    public static void alterar(Produto pizza)
            throws SQLException, Exception {
        String sql = "UPDATE Pizzas "
                + "SET Nome = ?, "
                + "Descricao = ?, "
                + "PrecoBroto = ?, "
                + "PrecoGrande = ?, "
                + "PrecoFamilia = ?, "
                + "Tipo = ? "
                + "WHERE ID = ?;";

        Connection connection = null;
        PreparedStatement statement = null;
        try {
            connection = ConnectionUtils.getConnection();
            statement = connection.prepareStatement(sql);

            statement.setString(1, pizza.getNome());
            statement.setString(2, pizza.getDescricao());
            statement.setString(3, pizza.getPrecoBroto());
            statement.setString(4, pizza.getPrecoGrande());
            statement.setString(5, pizza.getPrecoFamilia());
            statement.setString(6, pizza.getTipo());
            statement.setInt(7, pizza.getCodigo());
            System.out.println(statement.toString());

            System.out.println("Executando COMANDO SQL: " + sql);
            statement.execute();
        } finally {
            if (statement != null && !statement.isClosed()) {
                statement.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
    }
    
    public static boolean verificarUsuario (String login, String senha) throws
            SQLException, Exception {
        String sql = "SELECT * FROM Usuario"
                + " WHERE Username = ?"
                + " AND Password = ?;";
        Connection connection = null;
        PreparedStatement statement = null;

        connection = ConnectionUtils.getConnection();
        statement = connection.prepareStatement(sql);
        
        statement.setString(1, login);
        statement.setString(2, senha);

        System.out.println("Executando CONSULTA SQL: " + sql);
        ResultSet result = statement.executeQuery();

        while (result.next()) {
            return true;
        }

        return false;
    }
}
