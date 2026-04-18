import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Camera, Shield } from 'lucide-angular'; 

@Component({ 
  selector: 'app-test-icon', 
  standalone: true, 
  imports: [CommonModule, LucideAngularModule], 
  template: '<lucide-icon name="camera"></lucide-icon>' 
}) 
export class TestIcon {}
