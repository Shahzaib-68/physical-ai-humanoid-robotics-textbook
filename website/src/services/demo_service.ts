import { Demo, createDemo } from '../models/Demo';
import { chapterApi } from '../api/chapters';
import { DemoExecutionError, ValidationError } from '../utils/validation';
// Note: validateCode aur validateDemo methods ab class ke andar defined hain

export class DemoService {
  // Execute a demo in the browser
  async executeDemo(demoId: string, code: string, config: Record<string, any> = {}) {
    try {
      // Validate the code first
      const validationErrors = this.validateCode(code, []);
      if (validationErrors.length > 0) {
        throw new ValidationError(`Invalid demo code: ${validationErrors.join(', ')}`);
      }

      // Execute via API
      const result = await chapterApi.executeDemo(demoId, code, config);
      return result;
    } catch (error) {
      console.error(`Error executing demo with id ${demoId}:`, error);
      if (error instanceof ValidationError) {
        throw error;
      }
      throw new DemoExecutionError(`Failed to execute demo: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Validate demo code
  validateCode(code: string, dependencies: string[]): string[] {
    const errors: string[] = [];
    
    // Basic code validation
    if (!code || code.trim().length === 0) {
      errors.push('Code cannot be empty');
    }
    
    // Check for dangerous patterns
    if (code.includes('eval(') || code.includes('Function(')) {
      errors.push('Code contains potentially dangerous constructs');
    }
    
    // Validate dependencies
    if (dependencies.length === 0) {
      errors.push('At least one dependency must be specified');
    }
    
    return errors;
  }

  // Validate a complete demo object
  validateDemo(demo: Demo): string[] {
    const errors: string[] = [];
    
    if (!demo) {
      errors.push('Demo object is required');
      return errors;
    }
    
    if (!demo.id) {
      errors.push('Demo ID is required');
    }
    
    if (!demo.title || demo.title.trim().length === 0) {
      errors.push('Demo title is required');
    }
    
    if (!demo.code || demo.code.trim().length === 0) {
      errors.push('Demo code is required');
    }
    
    if (!demo.dependencies || demo.dependencies.length === 0) {
      errors.push('At least one dependency must be specified');
    }
    
    // Validate each dependency
    const unsupportedDeps = demo.dependencies.filter(
      dep => !this.isSupportedDependency(dep)
    );
    if (unsupportedDeps.length > 0) {
      errors.push(`Unsupported dependencies: ${unsupportedDeps.join(', ')}`);
    }
    
    return errors;
  }

  // Create a new demo (for content creation tools)
  createDemo(data: Partial<Demo>): Demo {
    return createDemo(data);
  }

  // Validate demo before execution
  async validateForExecution(demo: Demo): Promise<boolean> {
    const validationErrors = this.validateDemo(demo);
    if (validationErrors.length > 0) {
      console.error('Demo validation failed:', validationErrors);
      return false;
    }
    
    // Additional checks specific to execution environment
    if (!demo.dependencies.every(dep => this.isSupportedDependency(dep))) {
      return false;
    }
    
    return true;
  }

  // Check if dependency is supported
  private isSupportedDependency(dependency: string): boolean {
    const supported = ['p5.js', 'Three.js', 'Pyodide', 'TensorFlow.js', 'WebSerial', 'WebUSB'];
    return supported.includes(dependency);
  }

  // Get available dependencies
  getAvailableDependencies(): string[] {
    return ['p5.js', 'Three.js', 'Pyodide', 'TensorFlow.js', 'WebSerial', 'WebUSB'];
  }

  // Prepare demo for execution environment
  async prepareExecutionEnvironment(demo: Demo) {
    // Load required libraries based on dependencies
    for (const dep of demo.dependencies) {
      await this.loadDependency(dep);
    }
  }

  // Load a specific dependency
  private async loadDependency(dependency: string): Promise<void> {
    switch(dependency) {
      case 'p5.js':
        // Load p5.js
        break;
      case 'Three.js':
        // Load Three.js
        break;
      case 'Pyodide':
        // Initialize Pyodide
        break;
      case 'TensorFlow.js':
        // Load TensorFlow.js
        break;
      case 'WebSerial':
      case 'WebUSB':
        // These are browser APIs, no need to load
        break;
      default:
        throw new Error(`Unsupported dependency: ${dependency}`);
    }
  }
}