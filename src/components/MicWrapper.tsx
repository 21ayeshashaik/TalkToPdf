'use client';

import React, { useState } from 'react';
import Mic from '@/components/Mic';
import GeneratingResponse from '@/components/GeneratingResponse';
import ResultPageContent from '@/components/Home'; // <- CORRECT IMPORT

type MicWrapperProps = {
  onClose: () => void;
  onStartGenerating: () => void;
};

export default function MicWrapper({ onClose, onStartGenerating }: MicWrapperProps) {
  const [stage, setStage] = useState<'mic' | 'generating' | 'result'>('mic');

  const handleStartGenerating = () => {
    setStage('generating');
    setTimeout(() => setStage('result'), 5000);
    onStartGenerating();
  };

  const handleCloseMic = () => {
    setStage('generating');
    setTimeout(() => setStage('result'), 3000);
    onClose();
  };

  if (stage === 'mic') {
    return <Mic onClose={handleCloseMic} onStartGenerating={handleStartGenerating} />;
  }
  if (stage === 'generating') {
    return <GeneratingResponse />;
  }
  return <ResultPageContent onMicClick={() => setStage('mic')} />;
}