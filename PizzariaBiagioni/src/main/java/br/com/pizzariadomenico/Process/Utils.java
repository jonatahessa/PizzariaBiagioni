/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.pizzariadomenico.Process;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jonat
 */
public class Utils {

    public static List<Produto> ListarPizzasManutencao() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarManutencao();

        return pizzas;
    }

    public static List<Produto> ListarPizzasPaginaInicialPizzas() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarPaginaInicialPizzas();

        return pizzas;
    }

    public static List<Produto> ListarPizzasPaginaInicialPizzasDoces() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarPaginaInicialPizzasDoces();

        return pizzas;
    }

    public static List<Produto> ListarPizzasPaginaInicialMassas() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarPaginaInicialMassas();

        return pizzas;
    }

    public static List<Produto> ListarPizzasPaginaInicialCombinados() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarPaginaInicialCombinados();

        return pizzas;
    }

    public static List<Produto> ListarPizzasPaginaInicialSobremesas() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarPaginaInicialSobremesas();

        return pizzas;
    }

    public static List<Produto> ListarPizzasPaginaInicialBebidas() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarPaginaInicialBebidas();

        return pizzas;
    }

    public static List<Produto> ListarPizzasPaginaInicialPromocoes() throws Exception {
        List<Produto> pizzas = new ArrayList<>();
        pizzas = br.com.pizzariadomenico.Daos.DaoProduto.listarPaginaInicialPromocoes();

        return pizzas;
    }

    public static void inserirPizza(Produto pizza) throws Exception {
        br.com.pizzariadomenico.Daos.DaoProduto.inserir(pizza);
    }

    public static void desativar(int id) throws Exception {
        br.com.pizzariadomenico.Daos.DaoProduto.desativar(id);
    }

    public static void ativar(int id) throws Exception {
        br.com.pizzariadomenico.Daos.DaoProduto.ativar(id);
    }

    public static void alterar(Produto pizza) throws Exception {
        br.com.pizzariadomenico.Daos.DaoProduto.alterar(pizza);
    }

    public static List<Produto> pizzasMeio(List<Produto> pizzas) {
        for (Produto p : pizzas) {
            p.setPrecoBroto(calculaMeio(p.getPrecoBroto()));
            p.setPrecoGrande(calculaMeio(p.getPrecoGrande()));
            p.setPrecoFamilia(calculaMeio(p.getPrecoFamilia()));
        }

        return pizzas;
    }

    public static String calculaMeio(String preco) {
        if (preco != null) {
            BigDecimal v = new BigDecimal(preco.replace(',', '.'));

            return v.divide(new BigDecimal("2"), MathContext.DECIMAL128).toString().replace('.', ',');
        }
        return null;
    }

    public static List<Produto> pizzasTerco(List<Produto> pizzas) {
        for (Produto p : pizzas) {
            p.setPrecoBroto(calculaTerco(p.getPrecoBroto()));
            p.setPrecoGrande(calculaTerco(p.getPrecoGrande()));
            p.setPrecoFamilia(calculaTerco(p.getPrecoFamilia()));
        }

        return pizzas;
    }

    public static String calculaTerco(String preco) {
        if (preco != null) {
            BigDecimal v = new BigDecimal(preco.replace(',', '.'));
            BigDecimal v2 = v.divide(new BigDecimal("3"), RoundingMode.DOWN);

            return v2.toString().replace('.', ',');
            
            
        }
        return null;
    }

    public static String criptografia(String password) throws NoSuchAlgorithmException,
            UnsupportedEncodingException {
        MessageDigest algoritmo = MessageDigest.getInstance("SHA-256");
        byte digestMessage[] = algoritmo.digest(password.getBytes("UTF-8"));
        StringBuilder hexPassword = new StringBuilder();
        for (byte aByte : digestMessage) {
            hexPassword.append(String.format("%02X", 0xFF & aByte));
        }
        return hexPassword.toString();
    }

    public static boolean confirmaLogin(String login, String senha) throws Exception {
        return br.com.pizzariadomenico.Daos.DaoProduto.verificarUsuario(login, senha);
    }
}
