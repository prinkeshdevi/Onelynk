lines = open('src/components/Demo.tsx').readlines()
for i in range(len(lines)):
    if 'brandInfo.logo' in lines[i]:
        # look back up to 3 lines
        for j in range(i, max(-1, i-4), -1):
            if 'bg-white' in lines[j] and 'w-full h-full' not in lines[j]:
                lines[j] = lines[j].replace('bg-white', 'bg-[#0A0A0A]')
                break
            if 'bg-neutral-50' in lines[j]:
                lines[j] = lines[j].replace('bg-neutral-50', 'bg-[#0A0A0A]')
                break
open('src/components/Demo.tsx', 'w').writelines(lines)
