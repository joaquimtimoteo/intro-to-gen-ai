# Intro to Gen AI: Integrate APIs from OpenAI

Este repositório contém uma introdução à inteligência artificial generativa e como integrar APIs da OpenAI em projetos específicos. Abaixo estão os passos detalhados desde a instalação de ferramentas até a compreensão dos conceitos principais e a integração das APIs.

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)
  - [Instalando o Postman](#instalando-o-postman)
- [Como Usar](#como-usar)
  - [Terminologia Básica: Tokenizador OpenAI](#terminologia-básica-tokenizador-openai)
  - [Registro na OpenAI](#registro-na-openai)
  - [Obtendo uma Chave de API da OpenAI](#obtendo-uma-chave-de-api-da-openai)
  - [Usando uma Chave de API da OpenAI](#usando-uma-chave-de-api-da-openai)
  - [Referência da OpenAI](#referência-da-openai)
  - [Configuração de Cobrança para sua Conta OpenAI](#configuração-de-cobrança-para-sua-conta-openai)
- [Conceitos Importantes](#conceitos-importantes)
  - [Uma Visão Geral do HTTP](#uma-visão-geral-do-http)
  - [Formato JSON Explicado](#formato-json-explicado)
  - [Entendendo o GPT](#entendendo-o-gpt)
  - [Diferença entre GPT e OpenAI](#diferença-entre-gpt-e-openai)
- [Comprando Créditos/Tokens](#comprando-créditos-tokens)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

## Sobre

Este projeto foi criado para ajudar desenvolvedores a entender e integrar APIs da OpenAI em seus próprios projetos. Você aprenderá desde a instalação das ferramentas necessárias até a compreensão de conceitos fundamentais como JSON e HTTP, além de conhecer mais sobre o GPT e as APIs da OpenAI.

## Instalação

Para iniciar o uso das APIs da OpenAI, você precisará de algumas ferramentas e contas configuradas.

### Instalando o Postman

O Postman é uma ferramenta essencial para testar e trabalhar com APIs.

1. **Baixar e Instalar o Postman**:
   - Visite o [site do Postman](https://www.postman.com/downloads/) e baixe a versão adequada para seu sistema operacional.
   - Siga as instruções de instalação fornecidas.

## Como Usar

Abaixo estão os passos detalhados sobre como começar a usar as APIs da OpenAI.

### Terminologia Básica: Tokenizador OpenAI

O tokenizador da OpenAI é uma ferramenta que transforma texto em tokens, que são as unidades mínimas que os modelos de linguagem compreendem.

- **Token**: Uma unidade de texto, como uma palavra ou parte de uma palavra.
- **Tokenização**: O processo de dividir o texto em tokens.

### Registro na OpenAI

1. **Criar uma Conta**:
   - Vá para o [site da OpenAI](https://www.openai.com) e clique em **Sign Up**.
   - Complete o formulário de inscrição.

2. **Verificar o E-mail**:
   - Após o registro, verifique seu e-mail para confirmar sua conta.

### Obtendo uma Chave de API da OpenAI

1. **Login na Conta**:
   - Faça login na sua conta OpenAI.

2. **Acessar Chaves de API**:
   - Navegue até a seção **API Keys** no painel de controle.
   - Clique em **Create New Key** para gerar uma nova chave.

3. **Salvar a Chave**:
   - Copie a chave gerada e guarde em um local seguro.

### Usando uma Chave de API da OpenAI

1. **Configuração no Postman**:
   - Abra o Postman.
   - Crie uma nova requisição e configure o método HTTP para `POST`.
   - No cabeçalho, adicione uma chave `Authorization` com o valor `Bearer YOUR_API_KEY`, substituindo `YOUR_API_KEY` pela sua chave.

2. **Teste a API**:
   - Envie uma requisição para `https://api.openai.com/v1/engines/davinci-codex/completions`.
   - Verifique a resposta para garantir que sua chave está funcionando.

### Referência da OpenAI

- **Documentação Completa**:
  - Acesse a [documentação da OpenAI](https://beta.openai.com/docs) para detalhes completos sobre a API.

### Configuração de Cobrança para sua Conta OpenAI

1. **Acessar Configurações de Cobrança**:
   - Faça login no painel da OpenAI e vá até a seção **Billing**.

2. **Adicionar Método de Pagamento**:
   - Insira suas informações de pagamento e revise os planos de uso disponíveis.

3. **Configurar Limites**:
   - Defina limites de uso para controlar gastos.

Se você encontrar problemas com os créditos ou limites de uso, você pode seguir as etapas abaixo para comprar tokens e garantir o uso contínuo da API.

## Conceitos Importantes

### Uma Visão Geral do HTTP

HTTP (Hypertext Transfer Protocol) é o protocolo usado para comunicação entre clientes e servidores na web.

- **Métodos HTTP**:
  - `GET`: Recuperar dados.
  - `POST`: Enviar dados para o servidor.
  - `PUT`: Atualizar dados existentes.
  - `DELETE`: Remover dados.

### Formato JSON Explicado

JSON (JavaScript Object Notation) é um formato leve para troca de dados.

- **Estrutura Básica**:
  - Objetos: `{ "chave": "valor" }`
  - Arrays: `[ "valor1", "valor2" ]`

### Entendendo o GPT

GPT (Generative Pre-trained Transformer) é uma arquitetura de modelo de linguagem criada pela OpenAI.

- **Funcionalidades**:
  - Geração de texto coerente e contextualmente relevante.
  - Compreensão e resposta a perguntas.

### Diferença entre GPT e OpenAI

- **GPT**: Modelo de linguagem específico, como GPT-3 ou GPT-4.
- **OpenAI**: Empresa que desenvolve o GPT e outras tecnologias de IA.

## Comprando Créditos/Tokens

Se você ultrapassou os créditos gratuitos ou deseja garantir o uso ininterrupto da API da OpenAI, siga os passos abaixo para comprar tokens:

1. **Acessar a Página de Cobrança**:
   - Faça login na sua conta OpenAI e vá até a seção **Billing**.

2. **Selecionar um Plano ou Comprar Tokens**:
   - Escolha entre os planos de assinatura disponíveis que oferecem uma quantidade de créditos por mês.
   - Se preferir, compre tokens adicionais diretamente, que serão usados para pagar pelo uso da API.

3. **Inserir Informações de Pagamento**:
   - Adicione suas informações de pagamento para completar a compra.

4. **Confirmar a Compra**:
   - Revise os detalhes e confirme a compra. Você receberá um e-mail de confirmação e os tokens serão creditados na sua conta.

## Coleção do Postman

Para facilitar o teste das APIs da OpenAI, você pode usar a seguinte coleção do Postman:

```json
{
	"info": {
		"_postman_id": "adeabd17-ee33-422f-86c8-56380d15eabe",
		"name": "OpenAI",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "2354738"
	},
	"item": [
		{
			"name": "Get models",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://api.openai.com/v1/models",
					"protocol": "https",
					"host": [
						"api",
						"openai",
						"com"
					],
					"path": [
						"v1",
						"models"
					]
				}
			},
			"response": []
		},
		{
			"name": "Chat completion",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"model\": \"gpt-3.5-turbo\",\n    \"messages\": [\n        {\n            \"role\": \"user\",\n            \"content\": \"Hello!\"\n        }\n    ]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://api.openai.com/v1/chat/completions",
					"protocol": "https",
					"host": [
						"api",
						

 "openai",
						"com"
					],
					"path": [
						"v1",
						"chat",
						"completions"
					]
				}
			},
			"response": []
		}
	],
	"auth": {
		"type": "bearer",
		"bearer": [
			{
				"key": "token",
				"value": "{{apiKey}}",
				"type": "string"
			}
		]
	},
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "apiKey",
			"value": "FIX ME",
			"type": "string"
		}
	]
}
```

1. **Importar a Coleção**:
   - No Postman, clique em **Import** e cole o JSON acima ou importe o arquivo baixado.
   - Atualize a variável `apiKey` com sua chave de API da OpenAI.

2. **Testar as Requisições**:
   - Use os endpoints fornecidos para testar as APIs da OpenAI e verificar as respostas.

## Contribuindo

Para contribuir com este projeto, siga os passos abaixo:

1. **Fork este repositório**.
2. **Crie uma nova branch**: `git checkout -b minha-feature`.
3. **Faça suas alterações e commit**: `git commit -m 'Adiciona nova feature'`.
4. **Envie suas alterações**: `git push origin minha-feature`.
5. **Abra um Pull Request**.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### Contato

Joaquim Timoteo  
Email: [joaquimcarltimoteo@gmail.com](mailto:joaquimcarltimoteo@gmail.com)  
GitHub: [github.com/joaquimtimoteo](https://github.com/joaquimtimoteo)
Linkdin: [joaquimcarltimoteo@gmail.com](mailto:joaquimcarltimoteo@gmail.com)  
Para baixar o projeto, acesse [este link](https://github.com/joaquimtimoteo/intro-to-gen-ai).

---

Essa adição cobre como comprar tokens para continuar usando a API da OpenAI e inclui detalhes sobre a coleção do Postman para facilitar a interação com a API. Isso deve ajudar os usuários a resolver quaisquer problemas de cobrança e a utilizar a API de maneira eficiente.
