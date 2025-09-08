// src/index.ts

// Importações principais — ajuste conforme os arquivos reais
import { initPlugin } from './plugin';
import { registerCommands } from './commands';
import { setupEvents } from './events';

// Função principal de inicialização
export function initialize() {
  console.log('[UBNR] Inicializando plugin...');

  try {
    initPlugin();
    registerCommands();
    setupEvents();

    console.log('[UBNR] Plugin carregado com sucesso!');
  } catch (error) {
    console.error('[UBNR] Erro ao inicializar o plugin:', error);
  }
}

// Execução automática se necessário
initialize();
