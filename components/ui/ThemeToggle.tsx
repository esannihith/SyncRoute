import { Moon, Sun } from 'lucide-react-native';
import React, { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../app/_layout';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  label: string;
  icon: React.ReactNode;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, onPress, label, icon }) => {
  const { theme } = useTheme();

  const containerClass = `flex-row items-center p-4 rounded-lg border-2 ${
    selected
      ? theme === 'dark'
        ? 'border-blue-500 bg-blue-900/20'
        : 'border-blue-500 bg-blue-100'
      : theme === 'dark'
      ? 'border-gray-700 bg-gray-800'
      : 'border-gray-200 bg-white'
  }`;

  const circleClass = `w-5 h-5 rounded-full border-2 mr-3 items-center justify-center ${
    selected ? 'border-blue-500 bg-blue-500' : theme === 'dark' ? 'border-gray-600 bg-transparent' : 'border-gray-300 bg-transparent'
  }`;

  return (
    <TouchableOpacity onPress={onPress} className={containerClass}>
      <View className={circleClass}>
        {selected && <View className="w-2 h-2 rounded-full bg-white" />}
      </View>
      <View className="mr-3">
        {icon}
      </View>
      <Text className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

interface ThemeToggleProps {
  onPress: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onPress }) => {
  const { theme, setTheme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const handlePress = () => {
    setSelectedTheme(theme);
    setModalVisible(true);
    onPress();
  };

  const handleApply = () => {
    setTheme(selectedTheme);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setSelectedTheme(theme);
    setModalVisible(false);
  };

  // Icon color based on theme: white in dark mode, black in light mode
  const iconColor = theme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View className="flex-row items-center justify-between p-4">
          <View className="flex-row items-center">
            {theme === 'dark' ? (
              <Moon size={24} color={iconColor} style={{ marginRight: 12 }} />
            ) : (
              <Sun size={24} color={iconColor} style={{ marginRight: 12 }} />
            )}
            <Text className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Theme
            </Text>
          </View>
          <Text className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {theme === 'dark' ? 'Dark' : 'Light'}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={handleCancel}>
        <Pressable className="flex-1 justify-center items-center bg-black/50" onPress={handleCancel}>
          <Pressable
            className={`w-80 p-6 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            onPress={(e) => e.stopPropagation()}
          >
            <Text className={`text-xl font-bold text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Choose Theme
            </Text>

            <View className="space-y-3 mb-6">
              <RadioButton
                selected={selectedTheme === 'light'}
                onPress={() => setSelectedTheme('light')}
                label="Light"
                icon={<Sun size={24} color="#eab308" />}
              />
              <RadioButton
                selected={selectedTheme === 'dark'}
                onPress={() => setSelectedTheme('dark')}
                label="Dark"
                icon={<Moon size={24} color="#60a5fa" />}
              />
            </View>

            <View className="flex-row space-x-3">
              <TouchableOpacity
                onPress={handleCancel}
                className={`flex-1 p-3 rounded-lg border ${
                  theme === 'dark' ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'
                }`}
              >
                <Text className={`text-center font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleApply} className="flex-1 p-3 rounded-lg bg-blue-500">
                <Text className="text-center font-medium text-white">Apply</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default ThemeToggle;