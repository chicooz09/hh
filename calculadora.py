while True:
    print("\n--- Calculadora Simples ---")

    print("Escolha uma operação:")
    print(" +  -> Soma")
    print(" -  -> Subtração")
    print(" *  -> Multiplicação")
    print(" /  -> Divisão")
    print(" ^  -> Potência")
    print(" r  -> Raiz quadrada")
    print(" !  -> Fatorial")

    operador = input("Digite a operação desejada:\n")

    if operador in ["r", "!"]:
        num1 = float(input("Digite o número:\n"))
        num2 = None
    else:
        num1 = float(input("Digite o primeiro número:\n"))
        num2 = float(input("Digite o segundo número:\n"))

    if operador == "+":
        resultado = num1 + num2
    elif operador == "-":
        resultado = num1 - num2
    elif operador == "*":
        resultado = num1 * num2
    elif operador == "/":
        if num2 != 0:
            resultado = num1 / num2
        else:
            resultado = "Erro: divisão por zero!"
    elif operador == "^":
        resultado = num1 ** num2
    elif operador == "r":
        if num1 >= 0:
            resultado = num1 ** 0.5
        else:
            resultado = "Erro: raiz de número negativo!"
    elif operador == "!":
        if num1 >= 0 and num1.is_integer():
            fatorial = 1
            for i in range(1, int(num1) + 1):
                fatorial *= i 
            resultado = fatorial
        else:
            resultado = "Erro: fatorial só existe para números inteiros não negativos."
    else:
        resultado = "Operação inválida!"

    if operador == "r":
        print(f"\nA raiz quadrada de {num1} é: {resultado}")
    elif operador == "!":
        print(f"\nO fatorial de {int(num1)} é: {resultado}")
    elif operador in ["+", "-", "*", "/", "^"]:
        print(f"\nO resultado de {num1} {operador} {num2} é: {resultado}")
    else:
        print(resultado)

    continuar = input("\nDeseja fazer outra conta? (s para sim / qualquer outra tecla para sair):\n")
    if continuar.lower() != "s":
        print("Encerrando a calculadora. Até mais!")
        break
